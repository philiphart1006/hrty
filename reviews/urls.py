from django.urls import path
from .views import ReviewCreateListView, ReviewDestroyView

urlpatterns = [
  path('', ReviewCreateListView.as_view()),
  path('<int:pk>/', ReviewDestroyView.as_view())
]