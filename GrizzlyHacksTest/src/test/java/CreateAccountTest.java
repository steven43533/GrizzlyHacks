import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class CreateAccountTest extends WebDriverInitializing {

    @Before
    public void setUp(){
        String path = System.getProperty("user.dir");
        System.out.println(path);
        System.setProperty("webdriver.chrome.driver", path + "/chromedriver");
        if (driver != null)
            driver = new ChromeDriver();
    }

    @Test
    public void createAccount() {

        invokeBrowser();

        //Accessing the create account form
        driver.findElement(By.xpath("/html/body/app-root/app-header/nav/div[2]/button[3]")).click();

        // find the form and fill out the form
        WebElement formElement = driver.findElement(By.tagName("form"));
        formElement.findElement(By.xpath("//div[1]/div/input")).sendKeys("Anne");
        driver.findElement(By.xpath("//div[2]/div/input")).sendKeys("Joseph");
        driver.findElement(By.xpath("//div[2]/div/div/input")).sendKeys("ajoseph13@ggc.edu");
        driver.findElement(By.xpath("//div[3]/div/div/input")).sendKeys("Welcome7!");
        driver.findElement(By.xpath("//div[4]/div/div/input")).sendKeys("Welcome7!");
        // Submitting the form
        driver.findElement(By.tagName("button")).click();
    }

    @After
    public void tearDown(){
        driver.quit();
    }
}
