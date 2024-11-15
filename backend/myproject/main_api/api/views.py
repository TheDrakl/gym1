from rest_framework import generics, filters
from rest_framework.response import Response
from ..models import Supplement, Category, Gym, Plan, Feature, Review
from .serializers import SupplementSerializer, CategorySerializer, GymSerializer, EmailPlanValidation, EmailMessageSerializer, PlanSerializer, FeatureSerializer, ReviewSerializer
from django.conf import settings
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.throttling import UserRateThrottle
from .throttle import EmailThrottle
from .pagination import PlansPagination, ReviewsPagination, SupplementsPagination, SupplementDynamicPagination
from .utility import send_notification_email
from django.db.models import Q
from rest_framework.exceptions import NotFound


class SupplementListView(generics.ListCreateAPIView):
    # queryset = Supplement.objects.filter(is_active=True)
    queryset = Supplement.objects.all()
    serializer_class = SupplementSerializer
    pagination_class = SupplementDynamicPagination
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['name', 'price', 'stock']
    ordering = ['name']

    def get_queryset(self):
        queryset = super().get_queryset()
        # queryset = Supplement.objects.filter(is_active=True)
        search_input = self.request.query_params.get('search', None)

        if search_input:
            queryset = queryset.filter(
                Q(name__icontains=search_input) | Q(description__icontains=search_input)
            )
        return queryset

    def options(self, request, *args, **kwargs):
        response = super().options(request, *args, **kwargs)
        response.data['ordering_fields'] = self.ordering_fields
        return response


class SupplementListByCategoryView(generics.ListAPIView):
    serializer_class = SupplementSerializer
    pagination_class = SupplementDynamicPagination
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['name', 'price']
    ordering = ['name']

    def get_queryset(self):
        category_name = self.kwargs.get('category_name', None)
        category_id = self.kwargs.get('category_id', None)
        queryset = Supplement.objects.filter(is_active=True)
        search_input = self.request.query_params.get('search', None)

        category = None
        if category_name:
            category = Category.objects.filter(name=category_name).first()
            if not category:
                raise NotFound("Category not found")

        elif category_id:
            category = Category.objects.filter(id=category_id).first()
            if not category:
                raise NotFound("Category not found")
        else:
            raise NotFound("No category specified")

        queryset = Supplement.objects.filter(category=category)

        if search_input:
            queryset = queryset.filter(
                Q(name__icontains=search_input) | Q(description__icontains=search_input)
            )

        return queryset


class SupplementDetailView(generics.RetrieveUpdateAPIView):
    queryset = Supplement.objects.all()
    serializer_class = SupplementSerializer


class CategoryListView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailView(generics.RetrieveUpdateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class GymListView(generics.ListCreateAPIView):
    queryset = Gym.objects.all()
    serializer_class = GymSerializer


class GymDetailView(generics.RetrieveUpdateAPIView):
    queryset = Gym.objects.all()
    serializer_class = GymSerializer


class FeatureListView(generics.ListCreateAPIView):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer


class FeatureDetailView(generics.RetrieveUpdateAPIView):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer


class PlanListView(generics.ListCreateAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer
    pagination_class = PlansPagination


class PlanDetailView(generics.RetrieveUpdateAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer


class ReviewsListView(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    pagination_class = ReviewsPagination


class ReviewDetailView(generics.RetrieveUpdateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


class SendPlanEmailView(generics.CreateAPIView):
    serializer_class = EmailPlanValidation
    throttle_classes = [EmailThrottle]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # If valid, send the email
        first_name = serializer.validated_data['first_name']
        last_name = serializer.validated_data['last_name']
        phone_number = serializer.validated_data['phone_number']
        selected_gym = serializer.validated_data['selected_gym']
        email = serializer.validated_data['email']
        message_for_user = f'Hello {first_name}! \n\nThank you for your interest in purchasing a membership!\n\n We will contact you as soon as possible \n\n Thank you \nBest regards,\nGymName Team '
        message_for_team = f"Hello, we've got a new client \n\nFirst Name: {first_name}\nLast Name: {last_name}\nPhone Number: {phone_number}\nEmail: {email}\nSelected gym: {selected_gym}\n\nCall as soon as possible"

        try:
            send_notification_email(
                subject_user="Thank you for leaving a message for purchasing a membership",
                subject_team=f'Purchasing a membership from {first_name}',
                message_user=message_for_user,
                message_team=message_for_team,
                user_email=email,
                team_email="denismelnyk@icloud.com",
            )
            return Response({"message": "Email sent successfully!"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class SendMessageEmailView(generics.CreateAPIView):
    serializer_class = EmailMessageSerializer
    throttle_class = [EmailThrottle]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        first_name = serializer.validated_data['first_name']
        last_name = serializer.validated_data['last_name']
        phone_number = serializer.validated_data['phone_number']
        email = serializer.validated_data['email']
        currently_member = serializer.validated_data['currently_member']
        message_from_user = serializer.validated_data['message']
        if currently_member:
            currently_member_message = f'{first_name} is currently a member of our gym'
        else:
            currently_member_message = f'{first_name} is currently not a member of our gym'

        message_for_user = f"Hello {first_name}!\n\nThank you for reaching out as a valued member. "
        "We appreciate your message and will contact you as soon as possible.\n\n"
        "Best regards,\nGymName Team"
        message_for_team = f"Hello, we've got a new message from {first_name} {last_name}\n\nMessage: {message_from_user}\n\nPhone number: {phone_number}\n\nEmail: {email}\n{currently_member_message}\n\nReply as fast as possible\n\nThank you,\nTeam"

        try:
            send_notification_email(
                subject_user='Thank you for leaving a meesage, we will contact you',
                subject_team=f'New message from {first_name}',
                message_user=message_for_user,
                message_team=message_for_team,
                user_email=email,
                team_email="denismelnyk@icloud.com",
            )
            return Response({"message": "Email sent successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
