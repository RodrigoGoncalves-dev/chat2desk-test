provider "digitalocean" {
    token = "dop_v1_4e024c73686229d7732d0f05d05cf453c102d77a7ff8ed8c265376a7ad67dbe7"
}

resource "digitalocean_kubernetes_cluster" "chat2desk-cluster" {
    name       = "chat2desk-cluster"
    region     = "nyc1"
    version    = "1.21.2-do.0"
    node_pool {
        name       = "chat2desk-pool"
        size       = "s-1vcpu-2gb"
        node_count = 3
    }
}