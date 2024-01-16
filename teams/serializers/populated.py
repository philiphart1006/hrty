from .common import TeamSerializer
from users.serializers.common import UserSerializer

class PopulatedTeamSerializer(TeamSerializer):
  team_members = UserSerializer(many=True)