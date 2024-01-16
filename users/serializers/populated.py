from rest_framework import serializers
from .common import UserSerializer, ReducedUserSerializer
from softwares.serializers.common import SoftwareSerializer
from teams.serializers.common import TeamSerializer
from reviews.serializers.common import ReviewSerializer

class PopulatedUserSerializer(UserSerializer):
  manager = UserSerializer()

class ExtraPopulatedUserSerializer(UserSerializer):
  manager = ReducedUserSerializer()
  softwares = SoftwareSerializer(many=True)
  team = TeamSerializer()
  reviews_received = ReviewSerializer(many=True)