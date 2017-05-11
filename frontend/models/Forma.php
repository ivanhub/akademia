<?php

namespace frontend\models;

use Yii;

/**
 * This is the model class for table "forma".
 *
 * @property integer $Id
 * @property string $name
 * @property integer $phone
 * @property string $body
 * @property integer $fromfield
 */
class Forma extends \yii\db\ActiveRecord
{

    public static function tableName()
    {
        return 'forma';
    }

  public function formName()
{
    return '';
}
    public function rules()
    {
        return [
            [['name', 'phone', 'fromfield'], 'required','message' => 'Заполните поле'],
            [['fromfield'], 'integer'],
            [['body'], 'string'],
            [['name', 'pack'], 'string', 'max' => 30],
            [['packet'], 'string', 'max' => 50],
            [['date'], 'safe'],
            [['phone'], 'string', 'max' => 20],
            [['phone'], 'match', 'pattern' => '/^(?:(?:\+?\d\s*(?:[.-]\s*)?)?(?:\(\s*([0-9][0-9][0-9])\s*\)|([0-9][0-9][0-9]))\s*(?:[.-]\s*)?)?([0-9][0-9][0-9]|[0-9][0-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|д\.?|доб\.?|добавочный)\s*(\d+))?$/','message' => 'Неверный формат номера телефона'],
           ['name', 'match', 'pattern' => '/^[a-z]|[а-я]|[A-Z]|[А-Я]\w*$/','message' => 'Имя заполнено неверно']    

        ];
    }

   
    public function attributeLabels()
    {
        return [
            'Id' => 'ID',
            'name' => 'Name',
            'phone' => 'Phone',
            'body' => 'Body',
            'fromfield' => 'Fromfield',
            'pack' => 'Pack',
            'packet' => 'Packet',
            'date' => 'Date',

        ];
    }

    public function sendEmail()
    {
    if(Yii::$app->mailer->compose(  ['html' => 'html', 'text' => 'text'],['body' => $this->body, 'phone' => $this->phone, 'name'=>$this->name, 'pack' => $this->pack, 'packet' => $this->packet])
        ->setFrom(Yii::$app->params['supportEmail'])
        ->setTo(Yii::$app->params['orderEmail'])
        ->setSubject('Заявка с сайта Росавтоакадемия.РФ' )
        ->send())
    { return true; }
            else {
            return false;
        }
    }


    public function saveform()
{
    if ($this->validate()) {
        $form = new Forma();
        $form->name = $this->name;
        $form->phone = $this->phone;
        $form->body = $this->body;
        $form->fromfield = $this->fromfield;
        $form->pack = $this->pack;       
        $form->packet = $this->packet;       

        $form->save();


return true;
} else {
return false;
}
}
}
