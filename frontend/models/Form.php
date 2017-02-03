<?php

namespace frontend\models;

use Yii;

class Form extends \yii\db\ActiveRecord
{
    public static function tableName()
{
    return 'feedback';
}


 public function rules()
    {
        return [
            // name, email, subject and body are required
            [['name', 'email', 'subject', 'body'], 'required'],
            [['email'], 'string', 'max' => 200 ],
            // email has to be a valid email address
            ['email', 'email'],
            // verifyCode needs to be entered correctly
          //  ['verifyCode', 'captcha'],
        ];
    }

  public function attributeLabels()
    {
        return [
            'id' => 'ID',
             'verifyCode' => 'Подтвердите код',
            'name' => 'Имя',
            'email' => 'Электронный адрес',
            'subject' => 'Тема',
            'body' => 'Сообщение',
        ];
    }


}