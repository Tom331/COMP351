
from app import a

@a.route('/')
@a.route('/index')
def index():
  return "Hello World!!!"
