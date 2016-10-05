from django.shortcuts import render
from .models import Paint


def index(request):
    paint = Paint.objects.all()
    return render(request, 'portfolio/index.html', {'paint': paint})
