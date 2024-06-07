body {
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(to right, #ffecd2, #fcb69f);
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h1 {
  color: #444;
  margin-bottom: 20px;
}

.picture-card {
  display: inline-block;
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.picture-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.picture-display {
  border: 2px solid #eee;
  padding: 10px;
  border-radius: 10px;
  background-color: #fafafa;
  margin-bottom: 20px;
}

.picture-display img {
  max-width: 100%;
  border-radius: 10px;
}

.controls {
  display: flex;
  justify-content: center;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff7e5f;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
}

.button:hover {
  background-color: #ff3d54;
  transform: translateY(-2px);
}

#pictureInput {
  display: none;
}
