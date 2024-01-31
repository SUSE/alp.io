---
title: "ALP Dolomite 1.0 Milestone 8"
date: 2024-01-31
---
Adaptable Linux Platform (ALP) Dolomite 1.0 Milestone 8 has been released!

# Important notice

This is a Milestone 8 release. Please use it at your own risk and discretion. Not all architectures are supported.

The package repository is publicly available at https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/-basearch-/product/ . It is already preconfigured in all images. Beware CDN doesn't allow browsing the directory.

# Download links

## Dolomite 1.0 Milestone 8

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/x86_64/ALP-Dolomite.x86_64-1.0-Default-encrypted-Milestone8.raw

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/aarch64/ALP-Dolomite.aarch64-1.0-Default-Milestone8.raw.xz

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/x86_64/ALP-Dolomite.x86_64-1.0-Default-Milestone8.raw.xz

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/x86_64/ALP-Dolomite.x86_64-1.0-Default-qcow-Milestone8.qcow2

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/x86_64/iso/ALP-Dolomite.x86_64-1.0-Default-SelfInstall-Milestone8.install.iso

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/s390x/ALP-Dolomite.s390x-1.0-Default-fba-Milestone8.raw.xz

https://updates.suse.com/SUSE/Products/ALP-Dolomite/1.0/x86_64/ALP-Dolomite.x86_64-1.0-Default-SelfInstall-Milestone8.raw.xz


# Notable Changes

As a Milestone 8 , we still do not provide a comprehensive list of changes. But here are some notable changes:

 &#8226; number of packages have been updated

 &#8226; Added fixes for known issues from Milestone 7

# Known issues

Also there are following issues identified:

 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1219200 - Dependency issue when installing alp_elemental_client pattern
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1219212 - only 16M size is allocated to /boot/efi, and 'transactional-update -n bootloader' fails due to no free space
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1219201 - some unexpected logs ' BTRFS error (device vdb*): qgroup reserved space leaked'
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1219202 - Base-RT-SelfInstall failed due to dracut-pre-mount issue
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1219207 - kdump doesn't work with enabled SELinux
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1196298 - Overcommited memory protection manifests counter-intuitive effective values -  TW bug from 2022
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1217389 - fstests generic/581 fails on ext4 
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1219043  - fstests generic/733 fails on btrfs
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1219175  - fstests generic/736 fails in nfs 
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1219009 - encrypted images runs out of space
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1219218 - pam_systemd(login:session): Failed to release session: Interrupted system call
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1219209 - Unable to send container stderr message to parent Broken pipe
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1217934 - openssl-3 fips install not integrated
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1218091 - FIPS md5 hash working while it should not be allowed
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1217872 - sedispatch fails with  unexpected termination
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1215383 - pam_lastlog2: user 'bernhard' not found
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1217231 - systemd-cryptsetup errors found in journal
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1219290 - dm-0: /usr/lib/udev/rules.d/60-io-scheduler.rules:37 Failed to write
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1219164 - Failed to install sle-micro 6.0 guest using raw/qcow/encrypted images on sle-micro 6.0 host
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1218095 - [Beta1][SelfInstall ISO] installation grub can't show up in serial console and reports `gfxterm is not found` (miss 2 more fixes)
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1218093 - [SLEM][6.0][kvm] Modular libvirt services disabled and inactive after manual install host with selfinstall iso
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1217477 - [ALP][Dolomite][ignition] Can not install alp dolomite vm using default/seflinstall image with qemu ignition
 
 &#8226; https://bugzilla.suse.com/show_bug.cgi?id=1218151 - [SLEM][6.0][x86_64] journal log error "pam_lastlog2: User 'bernhard' not found"

