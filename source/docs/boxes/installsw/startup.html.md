---
title: "Auto Starting Services"
class_name: docs
full_width: true
---

Your Box will be stopped under the conditions [explained here](/docs/boxes/aob/sleep).

When you open your project, the Box will start instantly but, by default, any services will not be started automatically.

To prevent you having to start services manually each time you restart, you can create and configure a `startup.sh` file in the root of your project. This file will typically contain something like this

	parts start apache2 myotherservice

If you experience problems with auto starting (which should rarely happen) then you can add a parts stop line beforehand

	parts stop apache2 myotherservice
	parts start apache2 myotherservice

This makes sure that all parts flags are cleared out beforehand.

##Testing your startup.sh file
The best way to test your `startup.sh` file is to select the 'Project->Restart Box' menu item.

##Checking which services are running
To check your services status type the following

```bash
workspace$ ps ax

  PID TTY      STAT   TIME COMMAND                                                                                              
    1 ?        Ss     0:00 /sbin/init 
   12 ?        S      0:00 /sbin/plymouthd --mode=boot --attach-to-session 
   15 ?        Ss     0:00 /usr/sbin/sshd -D             
   19 ?        S      0:00 mountall --daemon                                                 
  420 ?        Ss     0:00 /home/codio/.parts/packages/apache2/2.4.7/bin/httpd -k start    
  421 ?        Sl     0:00 /home/codio/.parts/packages/apache2/2.4.7/bin/httpd -k start
  449 ?        Sl     0:00 /home/codio/.parts/packages/apache2/2.4.7/bin/httpd -k start
  477 ?        Sl     0:00 /home/codio/.parts/packages/apache2/2.4.7/bin/httpd -k start 
  505 ?        Ss     0:00 sshd: codio [priv]
  517 ?        S      0:00 sshd: codio@pts/0                                                    
  518 pts/0    Ss     0:00 -bash                                                          
  637 pts/0    R+     0:00 ps ax   
```

This is more reliable than `parts status`, which can sometimes incorrectly report the status.

You can use `kill <PID>` to stop a process from the command line.


