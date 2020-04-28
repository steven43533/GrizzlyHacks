import org.junit.After;
import org.junit.Test;
import org.openqa.selenium.By;

public class AdminDashboardTest extends WebDriverInitializing{

    @Test
    public void adminDashboard() throws InterruptedException {
        LogInTest logInObj = new LogInTest();
        logInObj.logIn();
        Thread.sleep(2000);
        driver.switchTo().alert().accept();
        Thread.sleep(1000);

        driver.findElement(By.xpath("//div[2]/button[4]")).click();
        driver.findElement(By.xpath("//div/div/div/div[1]/div/input")).sendKeys("Anne");
        driver.findElement(By.xpath("//*[@id=\"chk1\"]")).click();
        driver.findElement(By.xpath("//*[@id=\"chk2\"]")).click();
        driver.findElement(By.xpath("//*[@id=\"chk3\"]")).click();
        driver.findElement(By.xpath("//*[@id=\"chk4\"]")).click();
        driver.findElement(By.xpath("//*[@id=\"chk5\"]")).click();
        driver.findElement(By.xpath("//*[@id=\"chk6\"]")).click();

    }

    @After
    public void tearDown(){
        driver.quit();
    }
}
