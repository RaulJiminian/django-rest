from rest_framework import viewsets, permissions
from .serializers import LeadSerializer, UserSerializer
from .models import Lead
from django.contrib.auth.models import User

# Lead Viewset


class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = LeadSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
