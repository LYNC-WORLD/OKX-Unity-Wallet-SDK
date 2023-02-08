# OKX-Wallet-SDK

## Get Your API Key
Please get your API key before downloading the SDK from https://lync.world/

## Installation
Import the SDK .unitypackage file to your project. or simply drag and drop .unitypackage file to your project.

![image](https://user-images.githubusercontent.com/42548654/217530293-7a89502b-4410-4c95-bfde-abe2adeb2c54.png)

Once the OKX Wallet SDK package has finished importing into your Unity project, you can begin integrating it into your game. To do this, open the ConnectWallet scene provided by the LYNC-OKX SDK.

                                             Path : Assets ->LYNC-OKX-SDK -> Scenes
![image](https://user-images.githubusercontent.com/42548654/217530411-f89266ef-fc69-4f26-a1ba-c64f8d0ca193.png)

## Choose blockchain network
After opening ConnectWallet scene, Go to Interface. In the "Inspector" window, go to the API key & Enter the API key. 

![image](https://user-images.githubusercontent.com/42548654/217530584-fbf7adbd-d856-45e4-ab5f-665a98bbde41.png)

To choose the blockchain network, simply go to the CurrentChain drop-down menu and pick the network of your preference to deploy your game on.

![image](https://user-images.githubusercontent.com/42548654/217530615-de556a0f-809c-49c2-baf1-25e3fbcfc33b.png)

## Integrating ConnetWallet scene into the build 
To deploy your Unity project, it's necessary to set up the Player Settings in Unity. Follow these steps to select the LYNC WebGL template.

![image](https://user-images.githubusercontent.com/42548654/217530714-cb993652-163e-484d-9fa4-ab8f06b4270c.png)

In the "Build Settings" window, place ConnectWallet and FetchWallet at the top of this section. 

![image](https://user-images.githubusercontent.com/42548654/217530769-76fbd7c7-a40b-40da-af27-a93530f9a992.png)

Go to "Player Settings" and navigate to "Resolution and Presentation". Select LYNC - Template in WebGL Template

![image](https://user-images.githubusercontent.com/42548654/217530816-6305d029-7764-4acc-8a42-7a8b35d64c61.png)

After completing all the necessary steps and configuring the Player Settings with the LYNC WebGL template, you can now build and run your game.
To do this, go to "File" on the top menu bar in the Unity editor and select "Build and Run." 

![image](https://user-images.githubusercontent.com/42548654/217530863-dbb3a4c3-c0cf-4c50-bd62-d1d206471b31.png)


Congratulation, you have successfully integrated the OKX wallet with your favourite blockchain network using LYNC SDK. 
