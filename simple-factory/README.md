# javascript实现简单工厂模式
简单工厂模式提供了一个接口可以根据传递的参数的不同创建不同的对象，从而将对象自身的逻辑与对象的创建分离开。

从设计模式的分类来看简单工厂模式是创建型模式。事实上与简单工厂模式类似的还有工厂模式和抽象工厂模式。那它们有什么区别呢？

我们从名字入手分析一下，***简单*** ，为什么叫简单工厂模式？因为它仅仅只是分离了对象的创建和对象的使用，一旦有新的产品加入，就必须修改简单工厂中对象创建的方法，这样并没有遵守对修改封闭，对扩展开放的原则。所以这个模式的抽象和分离的还不够彻底，相比而言工厂模式就在简单工厂模式的基础之上加了一层对工厂的抽象，具体的产品由具体的工厂来创建，这样新增产品就只需要新增一个工厂就行，并不会对原来的代码产生影响，其次 ***工厂*** ，这个对应其创建型模式，用于创建对象。

## 应用场景
1. JDK中的工具类`java.tet.DateFormat`，用于格式化一个本地日期或时间。
	
		public final static DateFormat getDateInstance();
		public final static DateFormat getDateInstance(int style);
		public final static DateFormat getDateInstance(int style,Locale locale);
		
2. java加密技术
	
	* 获取不同加密算法的秘钥生成器

			KeyGenerator keyGen=KeyGenerator.getInstance("DESede");
	
	* 创建密码器
	
			Cipher cp=Cipher.getInstance("DESede");



## UML图
![simple-factory](http://www.tutorialspoint.com/design_pattern/images/factory_pattern_uml_diagram.jpg)
## 优缺点
### 优点
1. 简单工厂模式把对象创建的逻辑进行了封装，在使用的对象的时候不需要了解创建的细节
2. 创建对象可以使用对应的参数来确定创建的具体对象，而不需要知道对象的类名

### 缺点
1. 由于工厂类集中了所有产品创建逻辑，一旦不能正常工作，整个系统都要受到影响。
2. 使用简单工厂模式将会增加系统中类的个数，在一定程序上增加了系统的复杂度和理解难度。
3. 系统扩展困难，一旦添加新产品就不得不修改工厂逻辑，在产品类型较多时，有可能造成工厂逻辑过于复杂，不利于系统的扩展和维护。
4. 简单工厂模式由于使用了静态工厂方法，造成工厂角色无法形成基于继承的等级结构。

## 代码实例

### 代码地址：[simple-factory](https://github.com/wangfulin/javascript-design-pattern/tree/master/simple-factory)

**欢迎大家fork和pull request，希望大家一起能够能够一起交流学习设计模式，帮助我们用javascript写更专业的代码**

参考：

1. [简单工厂模式](http://design-patterns.readthedocs.org/zh_CN/latest/creational_patterns/simple_factory.html)
2. [simple-factory-pattern](http://code.tutsplus.com/tutorials/design-patterns-the-simple-factory-pattern--cms-22345)
3. [factory_pattern](http://www.tutorialspoint.com/design_pattern/factory_pattern.htm)