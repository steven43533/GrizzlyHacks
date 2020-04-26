import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class WebDriverInitializing {
    public static WebDriver driver;

    public WebDriverInitializing(){
        if (driver == null){
            driver = new ChromeDriver();
            System.out.println("***Chrome driver instantiated***");
        }
        else {
            System.out.println("***Chrome drive already instantiated***");
        }
    }

    public WebDriver getdriver(){
        if(driver == null) {
            driver = new ChromeDriver();
        }
        return driver;
    }

    public void invokeBrowser(){
        driver.get("https://grizzly-hacks.web.app/home");
        driver.manage().deleteAllCookies();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
    }
}
