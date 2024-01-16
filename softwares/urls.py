from django.urls import path
from .views import SoftwareListCreateView, SoftwareDetailView

urlpatterns = [
  path('',SoftwareListCreateView.as_view()),
  path('<int:pk>/',SoftwareDetailView.as_view())
]