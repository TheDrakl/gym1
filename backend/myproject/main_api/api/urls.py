from django.urls import path
from .views import SupplementListView, CategoryListView, GymListView, SendPlanEmailView, SendMessageEmailView, FeatureListView, PlanListView, SupplementDetailView, CategoryDetailView, GymDetailView, FeatureDetailView, PlanDetailView, ReviewsListView, ReviewDetailView, SupplementListByCategoryView

urlpatterns = [
    # Supplements
    path("supplements/", SupplementListView.as_view(), name="supplements"),
    path("supplements/<int:pk>", SupplementDetailView.as_view(), name="supplement-detail"),
    # Categories
    path("categories/", CategoryListView.as_view(), name="categories"),
    path("categories/<int:pk>", CategoryDetailView.as_view(), name="categorie-detail"),
    # Filter supplements by category
    path('category/name/<str:category_name>/', SupplementListByCategoryView.as_view(), name="category-by-name"),
    path('category/id/<int:category_id>/', SupplementListByCategoryView.as_view(), name="category-by-id"),
    # Gyms
    path("gyms/", GymListView.as_view(), name="gyms"),
    path("gyms/<int:pk>", GymDetailView.as_view(), name="gym-detail"),
    # Features
    path("features/", FeatureListView.as_view(), name="features"),
    path("features/<int:pk>", FeatureDetailView.as_view(), name="feature-detail"),
    # Plans
    path("plans/", PlanListView.as_view(), name="plans"),
    path("plans/<int:pk>", PlanDetailView.as_view(), name="plan-detail"),
    # Reviews
    path("reviews/", ReviewsListView.as_view(), name="reviews"),
    path("reviews/<int:pk>", ReviewDetailView.as_view(), name="review-detail"),
    # Sending emails
    path("send-email/", SendPlanEmailView.as_view(), name="send-email"),
    path("send-message/", SendMessageEmailView.as_view(), name="send-message"),
]
