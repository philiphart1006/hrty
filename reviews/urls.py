from django.urls import path
from .views import ReviewCreateView, ReviewDestroyView

urlpatterns = [
  path('', ReviewCreateView.as_view()),
  path('<int:pk>', ReviewDestroyView.as_view())
]