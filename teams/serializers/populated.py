from .common import TeamSerializer
from users.serializers.common import UserSerializer

class PopulatedTeamSerializer(TeamSerializer):
  user = UserSerializer(many=True)