from rest_framework.generics import ListCreateAPIView

class OwnerListCreateView(ListCreateAPIView):

  def perform_create(self, serializer):
    print(self.request)
    return serializer.save(owner=self.request.user)