# okayo-api

### démarrer la bdd

ouvrez docker et faites un "docker compose up --build -d" à la racine

### pour utiliser l'api

"pnpm install" pour installer les dépendances

"pnpm run dev" pour lancer avec nodemon

"pnpm run start" pour lancer normalement

## ordre des manipulations de test à faire pour découvrir l'api (voir documentation ci dessous )

1- créer un customer / client
2- créer un taux global
3- créer des produits
4- modifier le taux des produits pour voir les changements dans l'historiques des taux des produits
5- créer une facture
6- faires des modifications sur les clients, produits et taux et vérifier que cela n'affecte pas la facture qui reste la même une fois crée

### DOCUMENTATION :

# taux de tva

- créer un nouveau taux (à la création d'un nouveau taux celui ci est automatiquement mis par défault en base de donnée mais ça peut être modifié pour revenir à un ancien taux) : (post) "/api/tva"

```
data: {
"tva_rate" : 0.55,
"date_start" : "2025-01-01",
"date_end" : "2025-12-31"
}
```

- obtenir tout les taux : (get) "/api/tva"

- obtenir un taux par id : (get) "/api/tva/:id"

- supprimer un taux par id : (delete) "/api/tva/:id"

- update un taux par id : (put) "/api/tva/:id"

# customers

- créer un client : (post) "/api/customer"
```
data: {
  "client_code" : "000-111",
  "first_name" : "louan",
  "last_name" : "flamain",
  "address" : "1 rue de test",
  "zip_code" : "52662",
  "city" : "paris",
  "country" : "france",
  "phone" : "email",
  "email" : "test@test.fr"
  }
```

- obtenir tout les clients : (get) "/api/customer

- obtenir un client par id : (get) "/api/customer/:id"

- update un client : (put) "/api/customer/:id"

- delete un client : (delete) "/api/customer/:id"

# produits

- créer un produit : (post) "/api/product"

```
data: {
"product_code" : "1233463",
"name" : "produit 4",
"description" : "lorem ipsum",
"price" : 12.34,
"tva_rate" : 0.67 (taux de tva du produit custom optionnel, dans ce cas le taux pris sera le taux par défault de la table global "tva_rates")
}
```

- récupérer tout les produits : (get) "/api/product"

- récupérer un produit par id : (get) "/api/product/:id"

- mettre à jour un produit (mettre à jour le taux créera une nouvelle entrée dans la table de l'historique des taux de tva du produit) : (put) "/api/product/:id"

- récupérer l'historique des taux d'un produit : (get) "/api/product/:id/historical"

# facture

- créer une facture : (post) "/api/invoice"
  ```
  data : {
  "invoice_ref" : "1333",
  "biling_date" : "2024-03-17",
  "echeance_date" : "2024-07-18",
  "client_id" : 1,
  "reglement_condition" : "virement",
  "products" : [
  {
  "product_id" : 1,
  "quantity" : 2
  },
  {
  "product_id": 2,
  "quantity" : 1
  }
  ]
  }
  ```

- récupérer toutes les factures : (get) "/api/invoice"

- récupérer une facture par id : (get) "/api/invoice"
