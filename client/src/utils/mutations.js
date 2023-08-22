import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation AddProduct(
    $name: String!
    $price: Float!
    $image: String!
    $quantity: Int!
    $category: ID!
    $description: String
  ) {
    addProduct(
      name: $name
      price: $price
      image: $image
      quantity: $quantity
      category: $category
      description: $description
    ) {
      _id
      name
      description
      image
      quantity
      price
      category {
        name
      }
    }
  }
`;

export const EDIT_PRODUCT = gql`
  mutation EditProduct($productId: ID!, $updatedProduct: ProductInput!) {
    editProduct(productId: $productId, updatedProduct: $updatedProduct) {
      _id
      name
      description
      image
      quantity
      price
      category {
        name
      }
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($productId: ID!) {
    deleteProduct(productId: $productId)
  }
`;
