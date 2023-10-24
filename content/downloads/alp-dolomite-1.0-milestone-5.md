---
title: "ALP Dolomite 1.0 Milestone 5"
date: 2023-10-19
---
Adaptable Linux Platform (ALP) Dolomite 1.0 Milestone 5 has been released!

# Important notice

This is a Milestone 5 release. Please use it at your own risk and discretion. Not all architectures are supported.

The package repository is publicly available at https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/-basearch-/product/ . It is already preconfigured in all images. Beware CDN doesn't allow browsing the directory.

# Download links

## Dolomite 1.0 Milestone 5

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/aarch64/ALP-Dolomite.aarch64-1.0-Default-Milestone5.raw.xz 

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/x86_64/ALP-Dolomite.x86_64-1.0-Default-Milestone5.raw.xz 

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/x86_64/ALP-Dolomite.x86_64-1.0-Default-qcow-Milestone5.qcow2 

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/x86_64/iso/ALP-Dolomite.x86_64-1.0-Default-SelfInstall-Milestone5.install.iso 

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/s390x/ALP-Dolomite.s390x-1.0-Default-fba-Milestone5.raw.xz 

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/s390x/ALP-Dolomite.x86_64-1.0-Default-SelfInstall-Milestone5.raw.xz

## Agama Installer images

https://updates.suse.com/SUSE/Products/ALP-Installer/1.0/aarch64/iso/agama-live.aarch64-3.0.0-ALP-GM.iso

https://updates.suse.com/SUSE/Products/ALP-Installer/1.0/ppc64le/iso/agama-live.ppc64le-3.0.0-ALP-GM.iso

https://updates.suse.com/SUSE/Products/ALP-Installer/1.0/s390x/iso/agama-live.s390x-3.0.0-ALP-GM.iso

https://updates.suse.com/SUSE/Products/ALP-Installer/1.0/x86_64/iso/agama-live.x86_64-3.0.0-ALP-GM.iso



# Notable Changes

As a Milestone 5 , we still do not provide a comprehensive list of changes. But here are some notable changes:

* switch to python 3.11 (python 3.10 will be completely removed in milestone 6)
* systemd v254.x update
* firewalld 2.0.0 update
* kernel update to v 6.4
* also many other packages have been updated

# Known issues

Also there are following issues identified:

* qcow image https://bugzilla.suse.com/show_bug.cgi?id=1214319 : Installation as KVM guest failed and get warning: dracut-initqueue timeout script
* registry.suse.com repository access - https://bugzilla.suse.com/show_bug.cgi?id=1216203 : wrong key used in registry.suse.com . WORKAROUND applied: a corrected key added into repository & released. fix will be automatically applied since transaction-update will run after install.
* KVM - https://bugzilla.suse.com/show_bug.cgi?id=1216252 - Tools under /usr/local/bin/ does not work as expected (Error: initializing source docker or runc: runc create failed)
* KVM - https://bugzilla.suse.com/show_bug.cgi?id=1216353 - Guest installation failed with virt-install command
* KVM - https://bugzilla.suse.com/show_bug.cgi?id=1216384 - FileNotFoundError: No such file or directory: '/usr/share/qemu/firmware/'
* cont.img - https://bugzilla.suse.com/show_bug.cgi?id=1216360 - Fail to install the demo test vm via virt-install-demo.sh script
* cont.img - https://bugzilla.suse.com/show_bug.cgi?id=1216382 - FileNotFoundError: No such file or directory: '/usr/share/qemu/firmware/' via virt-select-firmware
* cont.img - https://bugzilla.suse.com/show_bug.cgi?id=1216383 - FileNotFoundError: No such file or directory: '/root/.local/virt-scenario/vmconfig'
