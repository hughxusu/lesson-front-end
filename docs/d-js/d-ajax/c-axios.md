

# Axios

轻量级ajax请求库，封装XmlHttpRequest对象，promise风格，可以用在浏览器端和node服务器端使用。

```react
axios.get(url)
.then(response => { // 成功回调返回response对象
  const result = response.data
  const repo = result.items[0]
  this.setState({
    repoName: repo.name,
    repoUrl: repo.html_url
  })
})
.catch(error => { // 失败回调返回error对象
  // debugger
  console.log(error)
  alert('请求失败 '+ error.message)
})
```



