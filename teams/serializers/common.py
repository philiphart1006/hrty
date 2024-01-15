from rest_framework.serializers import ModelSerializer
from ..models import Team

class TeamSerializer(ModelSerializer):
  class Meta:
    model = Team
    fields = '__all__'