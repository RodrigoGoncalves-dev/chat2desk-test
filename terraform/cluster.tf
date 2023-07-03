terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

provider "digitalocean" {
  token = "dop_v1_f3224ba9152e50c795b31c2fded806bf0e4ef40be3a5ba2ed2e5cacea1807633"
}

resource "digitalocean_kubernetes_cluster" "chatdesk_cluster" {
  name    = "chatdesk-cluster"
  region  = "nyc1"
  version = "1.27.2-do.0"

  node_pool {
    name       = "chatdesk-pool"
    size       = "s-2vcpu-2gb"
    node_count = 3
  }
}