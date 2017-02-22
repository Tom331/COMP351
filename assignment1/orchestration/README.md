# Setup instructions for heat-deploy.yaml and heat-deploy.env.yaml

The following steps are applicable in a Linux terminal but they should work
equally well on an OSX Terminal or even git_bash.

## Prepare deploy key

The ecdsa key is preferable to the RSA key because it is shorter.
This key is specific to one repository/project.
Do not use regular ssh keys as deploy keys.

```bash
ssh-keygen -t ecdsa -b 256 -f id_ecdsa 
```

Modify the resulting private key `id_ecdsa` so line breaks get replaced
with percent `%` symbols.

On Linux, you can script this step as follows:
```bash
tr '\n' '%' < id_ecdsa > onelinekey.txt
```

Then insert the one-line key into the `heat-deploy.env.yaml` file in the
appropriate parameter: *deploy_private_key*

The corresponding *public key* stored in `id_ecdsa.pub` should be added as a
deploy key to the *private* git repository containing the source code.

## Store public key for git server

The following steps only need to be done if you are using a git server other
than cisgitlab.ufv.ca or if you are using something other than an ecdsa deploy
key above. The ecdsa host key for cisgitlab.ufv.ca is already in the sample
`heat-deploy-env.yaml` file.

```bash
ssh-keyscan -t ecdsa cisgitlab.ufv.ca > host_key.txt
```

We scan for the server ecdsa key because we are using an ecdsa deploy key above.
Take the contents of host_key.txt and insert it into `heat-deploy.env.yaml` in
the appropriate parameter: *deploy_repository_host_key*

If your server happens to use hashed host keys, you should use the `-H`
parameter as follows:

```bash
ssh-keyscan -t ecdsa -H cisgitlab.ufv.ca > host_key.txt
```

## Set up authorized_keys

Although the heat template lets you specify a public key, you can only specify
one key. 
It is possible to specify more keys in cloudinit, but if you ever lose all your
keys, you will have to re-create the server. 
This is absolutely fine if your server is properly set up to just be rebuilt on
demand, but it might be very convenient to be able to automate the installation
of additional keys.

Modify the *public_keys_url* parameter to point to your public keys (works on
github accounts too). 
The cloudinit user_data section of the heat template includes a script that
refreshes the authorized_keys files every fifteen minutes.
