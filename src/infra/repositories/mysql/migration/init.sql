CREATE TABLE IF NOT EXISTS tasks (
  id VARCHAR(36) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  deleted_at TIMESTAMP DEFAULT NULL,
  title VARCHAR(64) NOT NULL,
  description VARCHAR(256),
  status ENUM('DONE', 'PENDING', 'WORKING', 'CANCELLED') NOT NULL DEFAULT 'PENDING'
);