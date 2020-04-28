import org.junit.Assert;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.safari.SafariDriver;

public class LaunchBrowsers extends WebDriverInitializing{

    public static void main(String[] args) {
        LaunchBrowsers launch = new LaunchBrowsers();

        launch.launchChrome();
        launch.launchSafari();
        launch.launchIE();
        launch.launchFirefox();

        System.out.println("Launching in Chrome, Safari, IE, FireFox successful");

         driver.close();
    }

    public void testingLaunch(){
        invokeBrowser();
        Assert.assertEquals("GGCHacks", driver.getTitle());
    }

    public void launchChrome(){
        driver = new ChromeDriver();
        testingLaunch();
    }

    public void launchSafari(){
        driver = new SafariDriver();
        testingLaunch();
    }

    public void launchIE(){
        driver = new InternetExplorerDriver();
        testingLaunch();
    }

    public void launchFirefox(){
        driver = new FirefoxDriver();
        testingLaunch();
    }

}
