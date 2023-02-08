using System;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class FetchWallet : MonoBehaviour
{
    [SerializeField] private Text WalletText;

    void Start()
    {
        String WalletAddress = PlayerPrefs.GetString("WalletAddress");
        WalletText.text = WalletAddress;
    }

    public void GoToNextScene(){
        int nextSceneIndex = SceneManager.GetActiveScene().buildIndex + 1;
        SceneManager.LoadScene(nextSceneIndex);
    }
}
