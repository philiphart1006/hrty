from django.urls import path
from .views import HardwareListCreateView, HardwareDetailView

urlpatterns = [
  path('',HardwareListCreateView.as_view()),
  path('<int:pk>/',HardwareDetailView.as_view())
]