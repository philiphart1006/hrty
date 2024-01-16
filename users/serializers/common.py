from rest_framework import serializers
from django.contrib.auth import get_user_model
# from ..models import User

User = get_user_model()

class UserCreateSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only=True)
  password_confirmation = serializers.CharField(write_only=True)

  class Meta:
    model = User
    fields = '__all__'
    extra_fields = ('password_confirmation')

  def validate(self,data):
    password_confirmation = data.pop('password_confirmation')
    password = data.get('password')

    if password != password_confirmation:
      raise serializers.ValidationError('Please ensure passwords match')
    return data
  
  def create(self,validated_data):
    user = User.objects.create_user(**validated_data)
    return user
  
class UserSerializer(serializers.ModelSerializer):

  class Meta:
    model = User
    # fields = '__all__'
    exclude = ('password',)

class ReducedUserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('username', 'first_name', 'last_name')