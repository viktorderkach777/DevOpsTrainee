# Deploy Prometheus to Kubernetes cluster

***

![Prometheus instances on a Kubernetes cluster running on GCE](./images/1.png)

***
    1. Create namespace "monitoring"

        ```bash
        $ kubectl create namespace monitoring
        ```
        Expected output example:
        ```bash
        namespace "monitoring" created
        ```
    2. Helm RBAC Setup for K8s v1.6+
        ```bash
        $ helm init
        $ helm repo add coreos https://s3-eu-west-1.amazonaws.com/coreos-charts/stable/
        $ kubectl -n kube-system create sa tiller 
        $ kubectl create clusterrolebinding tiller --clusterrole cluster-admin --serviceaccount=kube-system:tiller 
        $ helm init --service-account tiller --upgrade
        ```
    3. Install Kubernetes Operator
        ```bash
        $ helm install coreos/prometheus-operator --name prometheus-operator --namespace monitoring 
        $ helm install coreos/kube-prometheus --name kube-prometheus --set global.rbacEnable=true --namespace monitoring
        ```