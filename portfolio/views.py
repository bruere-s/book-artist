from django.shortcuts import render
from .models import Paint


def home(request):
    return render(request, 'portfolio/home.html', {})

def about(request):
    return render(request, 'portfolio/about.html', {})

def contact(request):
    return render(request, 'portfolio/contact.html', {})

def gallery(request):
    paint = Paint.objects.all()
    return render(request, 'portfolio/gallery.html', {'paint': paint})
