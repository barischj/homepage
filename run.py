import flask

app = flask.Flask(__name__)


@app.route('/', defaults={'path': 'index.html'})
@app.route('/<path:path>')
def homepage(path):
    return flask.send_from_directory("dist", path)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, threaded=True)
