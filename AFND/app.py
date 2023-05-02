from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/test')
def test():
    # Replace this with your own Python code
    output = "Hello, World!"
    return jsonify(output)

if __name__ == '__main__':
    app.run(debug=True)
