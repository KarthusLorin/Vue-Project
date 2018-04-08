## MVP模式

MVP 全称：Model-View-Presenter；是从经典的模式MVC演变而来，它们的基本思想有相通的地方：Controller/Presenter（控制器）负责逻辑的处理，Model（模型层）提供数据，View（视图层）负责显示。
在MVP中View并不直接使用Model，它们之间的通信是通过Presenter (MVC中的Controller)来进行的，所有的交互都发生在Presenter内部，而在MVC中View会直接从Model中读取数据而不是通过 Controller。
