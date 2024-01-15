from django.urls import path
from .views import TeamListCreateView, TeamDetailView

urlpatterns = [
  path('', TeamListCreateView.as_view()),
  path('<int:pk>', TeamDetailView.as_view())
]