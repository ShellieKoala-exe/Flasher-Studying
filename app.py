from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Mock Database
users = {}
flashcards = {}

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    if username in users and users[username] == password:
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"message": "Invalid credentials"}), 401

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    if username in users:
        return jsonify({"message": "Username already exists"}), 400
    users[username] = password
    flashcards[username] = []
    return jsonify({"message": "Signup successful"}), 201

@app.route('/flashcards', methods=['POST'])
def add_flashcard():
    data = request.json
    username = data.get('username')
    question = data.get('question')
    answer = data.get('answer')
    flashcards[username].append({"question": question, "answer": answer})
    return jsonify({"message": "Flashcard added"}), 201

@app.route('/flashcards/<username>', methods=['GET'])
def get_flashcards(username):
    if username not in flashcards:
        return jsonify({"message": "User not found"}), 404
    return jsonify(flashcards[username]), 200

if __name__ == '__main__':
    app.run(debug=True)
