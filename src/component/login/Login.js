"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { loginAction } from "@/actions/auth";
import './login.css'

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }
  
    setLoading(true);
    try {
      const result = await loginAction(username, password);
      if (result && !result.success) {
        setError(result.error);
        setLoading(false);
      }
    } catch (err) {
      if (err?.digest?.startsWith("NEXT_REDIRECT")) {
        return;
      }
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="login_page">
      <div 
        className="container d-flex align-items-center justify-content-center"
      >
        <Row className="w-100">
          <Col xs={12} sm={8} md={5} lg={5} className="mx-auto">
            <div className="login_card">
              <Card.Body>
                <h3 className="login_heading">Login</h3>

                {error && <Alert variant="danger">{error}</Alert>}

                <Form className="login_form" onSubmit={handleSubmit}>
                  <div className="form-group" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      value={username}
                      className=""
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="form-group" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="d-grid">
                    <Button className="btn-warning submit_btn" variant="primary" type="submit" disabled={loading}>
                      {loading ? "Signing in..." : "Sign In"}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}