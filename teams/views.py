from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Team
from .serializers.common import TeamSerializer
from .serializers.populated import PopulatedTeamSerializer

# Create your views here.

# /teams (GET, POST)
class TeamListCreateView(ListCreateAPIView):
  queryset = Team.objects.all()
  serializer_class = TeamSerializer

# /teams/:pk/ (GET, PUT, PATCH, DELETE)
class TeamDetailView(RetrieveUpdateDestroyAPIView):
  queryset = Team.objects.all()

  def get_serializer_class(self):
    if self.request.method == 'GET':
      return PopulatedTeamSerializer
    return TeamSerializer
