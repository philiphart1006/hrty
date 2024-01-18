from django.urls import path
from .views import RegisterView, RUDView, EmployeeListView, CustomLoginView, UpdateView
from rest_framework_simplejwt.views import ( TokenObtainPairView, TokenRefreshView)

urlpatterns = [
  path('register/', RegisterView.as_view()),
  path('login/', CustomLoginView.as_view()),
  path('', EmployeeListView.as_view()),
  path('<int:pk>/', RUDView.as_view()),
  path('<int:pk>/edit/', UpdateView.as_view())
]