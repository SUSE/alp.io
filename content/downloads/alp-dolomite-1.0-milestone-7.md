---
title: "ALP Dolomite 1.0 Milestone 7"
date: 2023-12-14
---
Adaptable Linux Platform (ALP) Dolomite 1.0 Milestone 7 has been released!

# Important notice

This is a Milestone 7 release. Please use it at your own risk and discretion. Not all architectures are supported.

The package repository is publicly available at https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/-basearch-/product/ . It is already preconfigured in all images. Beware CDN doesn't allow browsing the directory.

# Download links

## Dolomite 1.0 Milestone 7

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/x86_64/ALP-Dolomite.x86_64-1.0-Default-encrypted-Milestone7.raw 

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/aarch64/ALP-Dolomite.aarch64-1.0-Default-Milestone7.raw.xz

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/x86_64/ALP-Dolomite.x86_64-1.0-Default-Milestone7.raw.xz 

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/x86_64/ALP-Dolomite.x86_64-1.0-Default-qcow-Milestone7.qcow2 

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/x86_64/iso/ALP-Dolomite.x86_64-1.0-Default-SelfInstall-Milestone7.install.iso 

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/s390x/ALP-Dolomite.s390x-1.0-Default-fba-Milestone7.raw.xz 

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/x86_64/ALP-Dolomite.x86_64-1.0-Default-SelfInstall-Milestone7.raw.xz 


# Notable Changes

As a Milestone 7 , we still do not provide a comprehensive list of changes. But here are some notable changes:

 &#8226; Agama installer has been excluded from Dolomite specification.

 &#8226; Starting this Milestone it is not a part of Dolomite delivery. For installation, bootable images must be used.

 &#8226; Number of packages have been updated

 &#8226; Added fixes for known issues from Milestone 6 


# Known issues

Also there are following issues identified:

 &#8226; Base - https://bugzilla.suse.com/show_bug.cgi?id=1217872 : [SELinux] sedispatch fails to sent AVCs to system_bus_socket 

 &#8226; Kernel - https://bugzilla.suse.com/show_bug.cgi?id=1196298 : Overcommited memory protection manifests counter-intuitive effective values

 &#8226; Kernel - https://bugzilla.suse.com/show_bug.cgi?id=1217514 :  fstests generic/007 fails on all filesystems in dolomite

 &#8226; Kernel - https://bugzilla.suse.com/show_bug.cgi?id=1217516 : fstests xfs/188 fails in dolomite
