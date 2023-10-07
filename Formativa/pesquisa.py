from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
servico = Service (ChromeDriverManager().install())
navegador = webdriver. Chrome (service=servico)
from selenium.webdriver.common.by import By

navegador.get("https://bitencourtmilena.github.io/PowerBatt/index.html")

navegador.implicitly_wait(3)

dados0 = navegador.find_element(By.CLASS_NAME, "listas").text #classe
dados1 = navegador.find_elements(By.TAG_NAME, "h1") 
dados2 = navegador.find_elements(By.CSS_SELECTOR, ".box_nav") #css
dados3 = navegador.find_elements(By.ID,"busca") 
dados4 = navegador.find_elements(By.XPATH, "/html/body/section[1]/header/div/ul/li[1]/a")
dados5 = navegador.find_elements(By.LINK_TEXT, "Home") #link
dados6 = navegador.find_elements(By.NAME, "PowerBatt") #nome dentro da tag

print(dados0)
print(dados1)
print(dados2)
print(dados3)
print(dados4)
print(dados5)
print(dados6)