from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from django.contrib.auth import get_user_model
from .serializers.common import UserSerializer, UserCreateSerializer
from .serializers.populated import PopulatedUserSerializer, ExtraPopulatedUserSerializer

User = get_user_model()

# Create your views here.
class RegisterView(CreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserCreateSerializer

class RUDView(RetrieveUpdateDestroyAPIView):
  queryset = User.objects.all()
  serializer_class = ExtraPopulatedUserSerializer

class EmployeeListView(ListAPIView):
  queryset = User.objects.all()
  serializer_class = PopulatedUserSerializer
