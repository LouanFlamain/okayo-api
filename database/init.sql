CREATE TABLE clients (
    id INTEGER PRIMARY KEY,
    client_code VARCHAR(255) UNIQUE,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    adress VARCHAR(255),
    zip_code VARCHAR(20),
    city VARCHAR(255),
    country VARCHAR(255),
    phone VARCHAR(50),
    email VARCHAR(255)
);

CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    product_code VARCHAR(255) UNIQUE,
    name VARCHAR(255),
    description TEXT,
    price_ht FLOAT
);

CREATE TABLE tva_rate (
    id INTEGER PRIMARY KEY,
    code_tva VARCHAR(50) UNIQUE,
    rate FLOAT,
    date_start DATE,
    date_end DATE
);

CREATE TABLE invoice (
    id INTEGER PRIMARY KEY,
    invoice_ref VARCHAR(255) UNIQUE,
    biling_date DATE,
    echeance_date DATE,
    client_id INTEGER,
    reglement_condition VARCHAR(255),
    total_ht FLOAT,
    total_ttc FLOAT,
    FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE invoice_details (
    id INTEGER PRIMARY KEY,
    id_invoice INTEGER,
    id_product INTEGER,
    quantity INTEGER,
    unit_price_ht FLOAT,
    tva_rate FLOAT,
    total_ht FLOAT,
    total_ttc FLOAT,
    FOREIGN KEY (id_invoice) REFERENCES invoice(id),
    FOREIGN KEY (id_product) REFERENCES products(id)
);

CREATE TABLE tva_product_history (
    id INTEGER PRIMARY KEY,
    product_id INTEGER,
    tva_rate_id INTEGER,
    date_start DATE,
    date_end DATE,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (tva_rate_id) REFERENCES tva_rate(id)
);
