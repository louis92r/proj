from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/appel_api_test')
def api():
    return jsonify(status="ok", message="hello Louis")

if __name__ == "__main__":
    app.run(debug=True)