import org.junit.After;
import org.junit.Test;
import org.openqa.selenium.By;

public class UserDashboardTest extends WebDriverInitializing{

    @Test
    public void userDashboard() throws InterruptedException {
        LogInTest logInObj = new LogInTest();
        logInObj.logIn();
        Thread.sleep(2000);
        driver.switchTo().alert().accept();
        Thread.sleep(1000);

        driver.findElement(By.xpath("//nav/div[2]/button[3]")).click();     //User dashboard
        driver.findElement(By.xpath("//div/div/div/div/div[2]/div/div[1]/div/button")).click();     //Edit
        driver.findElement(By.xpath("//div/div/div/div/input[1]")).sendKeys("Cossette");    //first name
        driver.findElement(By.xpath("//div/div/div/div/input[2]")).sendKeys("Maddox");      //last name
        driver.findElement(By.xpath("//div/div/div/div/div[2]/button")).click();    //Make changes
    }

    @After
    public void tearDown(){
        driver.quit();
    }


}
