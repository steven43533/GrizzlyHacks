import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class LogInTest extends WebDriverInitializing{

    @Test
    public void logIn(){

        invokeBrowser();

        // Click log in button
        driver.findElement(By.xpath("//nav/div[2]/button[2]")).click();

        // Fill out the form
        WebElement email = driver.findElement(By.xpath("//form/div[1]/div/div/input"));
        email.sendKeys("ajoseph13@ggc.edu");
        driver.findElement(By.xpath("//div[2]/div/div/input")).sendKeys("Welcome7!");
        Assert.assertTrue(true);

        //LogIn
        driver.findElement(By.tagName("button")).click();

        driver.quit();
    }


}
