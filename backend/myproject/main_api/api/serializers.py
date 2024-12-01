from rest_framework import serializers
from ..models import Supplement, Category, Gym, Feature, Plan, Review, Flavour, Size


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class FlavourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flavour
        fields = "__all__"


class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = "__all__"


class SupplementSerializer(serializers.ModelSerializer):
    size = SizeSerializer(read_only=True, many=True)
    category = CategorySerializer(read_only=True)
    flavour = FlavourSerializer(read_only=True, many=True)

    class Meta:
        model = Supplement
        fields = [
            "id",
            "name",
            "description",
            "category",
            "is_active",
            "price",
            "image",
            "stock",
            "size",
            "flavour",
        ]


class GymSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gym
        fields = "__all__"


class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = "__all__"


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"


class PlanSerializer(serializers.ModelSerializer):
    features = FeatureSerializer(many=True, read_only=True)

    class Meta:
        model = Plan
        fields = "__all__"


# Validate email to send_email for buying a membership
class EmailPlanValidation(serializers.Serializer):
    first_name = serializers.CharField(max_length=100)
    last_name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    phone_number = serializers.CharField(max_length=30)
    selected_gym = serializers.CharField(max_length=50)

    class Meta:
        fields = "__all__"


class EmailMessageSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=100)
    last_name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    phone_number = serializers.CharField(max_length=30)
    currently_member = serializers.BooleanField(default=False)
    reason_contacting = serializers.CharField(max_length=30)
    message = serializers.CharField(max_length=300)

    class Meta:
        fields = "__all__"
