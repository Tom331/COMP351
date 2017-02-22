FROM python:3.4
VOLUME /code
WORKDIR /code
RUN pip install \
    gunicorn \
    flask \
    flask \
    flask-login \
    flask-openid \
    flask-mail \
    flask-sqlalchemy \
    sqlalchemy-migrate \
    flask-whooshalchemy \
    flask-wtf \
    flask-babel \
    guess_language \
    flipflop \
    coverage 

CMD ./run.py
